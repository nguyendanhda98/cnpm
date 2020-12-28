// phong-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "phong";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      thanhpho: { type: String, required: false },
      diachi: { type: String, required: false },
      giaphong: { type: Number, required: false },
      chitiet: { type: String, required: false },
      emailchu: { type: String, required: false },
      emailkhach: { type: String, required: false },
      emailthue: { type: String, required: false },
      linkanh: { type: String, required: false },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
