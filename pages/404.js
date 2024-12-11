import route from '@/route/routes';
import { ERouter } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="mt-6 text-4xl font-extrabold">Oops! Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-700">
          It seems like you&apos;re lost in space. Let&rsquo;s get you back on
          track!
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 flex justify-center"
        >
          <Button
            text={'Go Back Home'}
            onClick={() => ERouter.push(route.dashboard)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFound;
