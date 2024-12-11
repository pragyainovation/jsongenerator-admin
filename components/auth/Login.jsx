import { motion } from 'framer-motion';
import Button from '@/widgets/button/Button';
import HookFormInput from '@/widgets/inputField/HookFormInput';
import Link from 'next/link';
import route from '@/route/routes';
import useLogin from '@/hooks/auth/useLogin';
import DialogBox from '@/widgets/DialogBox';
import { BUTTON } from '@/constant/common/constant';
import { loaderHandler } from '@/utils/helper';
import Otp from '@/widgets/Otp';

function Login() {
  const {
    handleSubmit,
    control,
    isLoading,
    onSubmit,
    openDialog,
    setOpenDialog,
    handleOtp,
  } = useLogin();

  return (
    <div className="bg-light w-screen h-screen flex justify-center items-center">
      <motion.div
        className="bg-white w-72 min-h-1/2 rounded p-6 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Login
        </motion.div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <HookFormInput
              name="email"
              label="Email"
              control={control}
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <HookFormInput
              name="password"
              label="Password"
              control={control}
              placeholder="Enter your password"
            />
          </motion.div>

          <motion.div
            className="mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              text="Login"
              isLoading={loaderHandler(isLoading)}
              className="w-full"
            />
          </motion.div>

          <motion.div
            className="text-center text-sm  my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {`Don't have an account? `}
            <Link
              href={route.signup}
              className="text-secondary hover:underline"
            >
              Sign up
            </Link>
          </motion.div>
        </form>

        <DialogBox
          isOpen={openDialog === BUTTON.OTP}
          onClose={() => setOpenDialog(null)}
        >
          {openDialog === BUTTON.OTP && (
            <Otp
              timerDuration={60}
              isLoading={isLoading}
              callback={(buttonName, otp) => handleOtp(buttonName, otp)}
            />
          )}
        </DialogBox>
      </motion.div>
    </div>
  );
}

export default Login;
