import { motion } from 'framer-motion';
import route from '@/route/routes';
import CommonLink from '@/widgets/CommonLink';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';

// Memoized CommonLink to prevent re-renders
const MemoizedCommonLink = ({ href, text, isActive }) => (
  <CommonLink
    href={href}
    text={text}
    className={classNames('capitalize inline-block p-2 w-full', {
      'bg-black text-white rounded': isActive,
      'hover:bg-white hover:text-black rounded': !isActive,
    })}
  />
);

const Sidebar = () => {
  const router = useRouter();
  const [openGroup, setOpenGroup] = useState(null); // Track open group

  const sideBarMenu = [
    { name: 'overview', href: route.dashboard },
    { name: 'users', href: route.usersList },
    { name: 'roles', href: route.roles },
    { name: 'tickets', href: route.tickets },
    { name: 'donation', href: route.doantion },
    'break',
    {
      group: 'analytics',
      subMenu: [
        // { name: 'user analytics', href: route.userAnalytics },
        { name: 'api analytics', href: route.apiAnalytics },
      ],
    },
  ];

  // Memoized toggleGroup function to prevent re-renders
  const toggleGroup = useCallback(
    (group) => {
      setOpenGroup((prevGroup) => (prevGroup === group ? null : group));
    },
    [] // Dependency array empty because no external dependencies
  );

  // Render submenu for a group
  const renderSubMenu = (subMenu) => {
    return subMenu.map((item, index) => {
      if (item === 'break') {
        return <hr key={index} className="my-2" />;
      }

      return <MemoizedCommonLink key={index} href={item.href} text={item.name} isActive={router.pathname === item.href} />;
    });
  };

  // Render menu items
  const renderMenuItems = () => {
    return sideBarMenu.map((item, index) => {
      if (item === 'break') {
        return <hr key={index} className="my-2" />;
      }

      if (item.group) {
        return (
          <div key={index}>
            <button
              className={classNames('capitalize inline-block text-start p-2 w-full cursor-pointer', {
                'bg-black text-white rounded': openGroup === item.group,
                'hover:bg-white hover:text-black rounded': openGroup !== item.group,
              })}
              onClick={() => toggleGroup(item.group)} // Toggle the group
            >
              {item.group}
            </button>
            {/* Render submenu only if the group is open */}
            {openGroup === item.group && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 0.3 }} className="pl-4 mt-2 overflow-hidden">
                {renderSubMenu(item.subMenu)}
              </motion.div>
            )}
          </div>
        );
      }

      return <MemoizedCommonLink key={index} href={item.href} text={item.name} isActive={router.pathname === item.href} />;
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {renderMenuItems()}
    </motion.div>
  );
};

export default Sidebar;
