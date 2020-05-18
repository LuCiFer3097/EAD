const aws = require("aws-sdk");
const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
aws.config.update({
  secretAccessKey: ,
  accessKeyId: ,
  region: "us-west-2"
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    // Auto detect content type
    contentType: multerS3.AUTO_CONTENT_TYPE,
    bucket: "mytestbucketforcc",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
