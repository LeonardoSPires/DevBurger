import * as Yup from 'yup';
import Order from '../schemas/Order';
import User from '../models/User';

class OrderController {
    async store(req, res) {
        /*const schema = Yup.object().shape({
          name: Yup.string().required(),

});

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ error: err.errors });
        }
  
        const { name } = req.body;*/

        const order = {
            User: {
                id: req.userId,
                name: req.userName,
            },
        }

        const product = await Product.create({
            name,
            price,
            category_id,
            path,
        });

       return res.status(201).json(order);
    }
}

export default new OrderController();