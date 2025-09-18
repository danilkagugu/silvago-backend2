import { model, Schema } from "mongoose";

const variationSchema = new Schema({
  goodId: { type: Number, required: true }, // ID з Торгсофт (GoodID)
  fullName: { type: String, required: true }, // Повна назва (GoodName)
  // name: { type: String, required: true }, // Повна назва (GoodName)
  barcode: { type: String },
  volume: { type: String },
  tone: { type: String },
  retailPrice: { type: Number, required: true },
  discountPrice: { type: Number },
  quantity: { type: Number, required: true },
  // image: { type: String },
});
const goodsSchema = new Schema(
  {
    modelId: { type: Number, required: true, unique: true }, // один для всіх варіацій
    modelName: { type: String, required: true }, // Назва без об'єму
    brand: { type: String, required: true },
    country: { type: String, required: true },
    // categories: [{ type: String, required: true }],

    // Фото по замовчуванню

    // Варіації
    variations: [variationSchema],

    randomOrderKey: { type: Number, default: Math.random },
  },
  { timestamps: true }
);

// const goodsSchema = new Schema(
//   {
//     goodId: { type: Number, required: true, unique: true }, // ID з Торгсофт (GoodID)
//     modelId: { type: Number, required: true }, // Спільний ID для групи товарів (ModelGoodID)
//     name: { type: String, required: true }, // Повна назва (GoodName)
//     modelName: { type: String, required: true }, // Назва моделі без об'єму (Description)
//     brand: { type: String, required: true }, // Бренд
//     country: { type: String, required: true }, // Країна виробник

//     // Ціни
//     retailPrice: { type: Number, required: true },
//     // wholesalePrice: { type: Number, required: true },
//     discountPrice: { type: Number, required: false },
//     // discount: { type: Number, default: 0 },

//     // Наявність
//     quantity: { type: Number, required: true },

//     // Характеристики
//     volume: { type: String, required: false }, // Напр. "200 мл" або "8 мл"
//     tone: { type: String, required: false }, // Відтінок, якщо є
//     measure: { type: String, required: false }, // Одиниця виміру (мл, г і т.д.)

//     // Ідентифікатори
//     barcode: { type: String, required: false },
//     //slug: { type: String, required: true, unique: true }, // URL-частина

//     // Зображення
//     image: { type: String, required: false },
//     // images: [{ type: String }],

//     // Категорії
//     // categories: [
//     //   {
//     //     idTorgsoft: { type: Number, required: true },
//     //     name: { type: String, required: true },
//     //     slug: { type: String, required: true },
//     //   },
//     // ],
//     categories: [{ type: String, required: true }], // Масив товару

//     // Додаткові поля
//     randomOrderKey: { type: Number, default: Math.random },
//   },
//   { timestamps: true }
// );

const Goods = model("goods", goodsSchema);

export default Goods;
