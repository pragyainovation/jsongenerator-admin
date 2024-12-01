import ContactUs from '@/components/dashboard/others/ContactUs';
import DashboardWrapper from '@/shared/DashboardWrapper';
import { authHandler } from '@/utils/authHandler';

function contact({ user }) {
  return (
    <DashboardWrapper user={user}>
      <ContactUs />
    </DashboardWrapper>
  );
}

export default contact;

export const getServerSideProps = async (context) => {
  return await authHandler(context);
};
