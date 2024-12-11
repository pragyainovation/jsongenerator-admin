import classNames from 'classnames';
import Sidebar from './Sidebar';
import Button from '@/widgets/button/Button';
import { useContext, useEffect, useState } from 'react';
import SimpleLoader from '@/widgets/loader/SimpleLoader';
import { ERouter, logout } from '@/utils/helper';
import MenuBarIcon from '@/icon/MenuBarIcon';
import CloseIcon from '@/icon/CloseIcon';
import route from '@/route/routes';
import { SocketContext } from '@/context/socketContext';

function DashboardWrapper({ children, user }) {
  const socket = useContext(SocketContext);
  const [isOpen, setOpen] = useState(true);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    setMobileOpen(false);
    await logout();
  };
  const handleProfile = async () => {
    setMobileOpen(false);
    ERouter.push(route.profile);
  };

  useEffect(() => {
    if (socket) {
      socket.on('socket-members', (data) => {
        console.log('✌️  data --->', data);
      });

      // Cleanup
      return () => {
        socket.off('socket-members');
      };
    }
  }, [socket]);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex">
      {isLoading && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
          <SimpleLoader
            text={'loading...'}
            className="flex gap-2 items-center"
          />
        </div>
      )}

      {/* Left Side */}
      <div
        className={classNames('bg-gray5 p-2', {
          hidden: !isOpen && !isMobileOpen,
          'hidden sm:block sm:w-[300px]': isOpen && !isMobileOpen,
          'absolute top-0 bottom-0 left-0 right-0 inset-0 z-20': isMobileOpen,
        })}
      >
        {/* left side */}
        <div className="w-full h-full flex flex-col gap-2">
          <div className="h-10 border-b pb-2 border-b-gray4 flex items-center justify-between">
            <span className="text-2xl">Json Generator</span>
            <Button
              className="sm:hidden"
              onClick={() => setMobileOpen(false)}
              noClass
              icon={<CloseIcon />}
            />
          </div>
          <div className="flex flex-col gap-1 w-full h-full overflow-y-auto scrollbar-hide">
            <Sidebar />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              text={'Profile'}
              className={'w-full italic'}
              onClick={handleProfile}
            />
            <Button
              text={'Logout'}
              className={'w-full italic'}
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-rows-[auto_1fr] w-full h-full p-2 overflow-hidden">
        {/* Right content */}
        <div className="h-10 border-b border-b-gray4 flex w-full bg-white items-center justify-between">
          <Button
            className="hidden sm:block"
            onClick={() => setOpen(!isOpen)}
            noClass
            icon={<MenuBarIcon />}
          />
          <Button
            className="sm:hidden"
            onClick={() => {
              setMobileOpen(!isMobileOpen);
              setOpen(false);
            }}
            noClass
            icon={<MenuBarIcon />}
          />
          <span className="p-2 flex w-full justify-end">{user?.fullName}</span>
        </div>

        {/* Main content */}
        <div className="box-border h-full w-full overflow-hidden p-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardWrapper;
