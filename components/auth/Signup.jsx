import { motion } from 'framer-motion';
import useRegister from '@/hooks/auth/useRegister';
import Button from '@/widgets/button/Button';
import HookFormInput from '@/widgets/inputField/HookFormInput';
import Link from 'next/link';
import route from '@/route/routes';

function Signup() {
  const { handleSubmit, control, isLoading, onSubmit } = useRegister();

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
          Sign Up
        </motion.div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <HookFormInput
              name="userName"
              label="UserName"
              control={control}
              placeholder="Enter your username"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <HookFormInput
              name="fullName"
              label="FullName"
              control={control}
              placeholder="Enter your fullname"
            />
          </motion.div>

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
              text="Signup"
              isLoading={isLoading}
              className="w-full"
              disabled={isLoading}
            />
          </motion.div>

          <motion.div
            className="text-center text-sm  my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Already have an account?{' '}
            <Link href={route.login} className="text-secondary">
              Login{' '}
            </Link>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;
