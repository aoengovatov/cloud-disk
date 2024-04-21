const fileService = require("../services/file.service");
const User = require("../models/User");
const File = require("../models/File");

class FileController {
    async createDir(req, res) {
        try {
            const { name, type, parent } = req.body;
            const file = new File({ name, type, parent, user: req.user.id });
            const parentFile = await File.findOne({ _id: parent });

            if (!parentFile) {
                file.path = name;
                await File.createDir(file);
            } else {
                file.path = `${parentFile.path}\\${file.name}`;
                await File.createDir(file);
                parentFile.child.push(file._id);
                await parentFile.save();
            }
            await file.save();
            return res.json(file);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async getFiles(req, res) {
        try {
            const files = await File.find({
                user: req.user.id,
                parent: req.params.parent,
            });
            return res.json(files);
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Can not get files" });
        }
    }
}

module.exports = new FileController();
