 import { motion } from 'framer-motion';
import route from '@/route/routes';
import CommonLink from '@/widgets/CommonLink';
import classNames from 'classnames';
import { useRouter } from 'next/router';

function Sidebar() {
  const router = useRouter();
  const sideBarMenu = [
    { name: 'overview', href: route.dashboard },
    { name: 'report', href: route.help },
    { name: 'users', href: route.usersList },
    { name: 'roles', href: route.roles },
    { name: 'tickets', href: route.tickets },
    { name: 'donation', href: route.doantion },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {sideBarMenu.map((menu, index) =>
        menu === 'break' ? (
          <hr key={index} className="my-2" />
        ) : (
          <CommonLink
            key={index}
            href={menu?.href}
            text={menu.name}
            className={classNames('capitalize inline-block p-2 w-full', {
              'bg-black text-white rounded': router.pathname === menu.href,
              'hover:bg-white hover:text-black rounded': router.pathname !== menu.href,
            })}
          />
        )
      )}
    </motion.div>
  );
}

export default Sidebar;
