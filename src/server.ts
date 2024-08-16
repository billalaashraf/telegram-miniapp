import app from './app';
import RegisterController  from './controllers/registerController';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  const response: any = await RegisterController.register();
  console.log(response)
});