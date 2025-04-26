import { Box, Card, CardContent, Paper, Typography } from '@mui/material';
import { FaUserCheck, FaUserPlus, FaUsers, FaUserTimes } from 'react-icons/fa';
import {
  MdBusiness,
  MdDiamond,
  MdPerson,
  MdSearch,
  MdShoppingCart,
  MdWeb,
} from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../Utils/axios';

interface DashboardData {
  totalDiamonds: number;
  totalSellers: number;
  totalSearchToday: number;
  addedToCartToday: number;
  totalUsers: number;
  activeUsers: number;
  userRegisteredToday: number;
  userNotAttachedWithSeller: number;
  totalCompanies: number;
}

const Dashboard = () => {
  const { data: dashboardData } = useQuery<{ data: DashboardData }>({
    queryKey: ['DASHBOARD_SUMMARY'],
    queryFn: () => axiosInstance.get('/Dashboard/summary'),
  });

  const userData = dashboardData?.data || {
    totalDiamonds: 0,
    totalSellers: 0,
    totalSearchToday: 0,
    addedToCartToday: 0,
    totalUsers: 0,
    activeUsers: 0,
    userRegisteredToday: 0,
    userNotAttachedWithSeller: 0,
    totalCompanies: 0,
  };

  const cards = [
    {
      title: 'Search Diamonds',
      icon: <MdSearch size={24} />,
    },
    {
      title: 'Stock',
      icon: <MdDiamond size={24} />,
    },
    {
      title: 'Web Tracking',
      icon: <MdWeb size={24} />,
    },
    {
      title: 'Total Diamonds',
      value: userData.totalDiamonds,
      icon: <MdDiamond size={24} />,
    },
    {
      title: 'Total Sellers',
      value: userData.totalSellers,
      icon: <MdPerson size={24} />,
    },
    {
      title: 'Total search Today',
      value: userData.totalSearchToday,
      icon: <MdSearch size={24} />,
    },
    {
      title: 'Added To Cart Today',
      value: userData.addedToCartToday,
      icon: <MdShoppingCart size={24} />,
    },
    {
      title: 'Total Users',
      value: userData.totalUsers,
      icon: <FaUsers size={20} />,
    },
    {
      title: 'Total Active Users',
      value: userData.activeUsers,
      icon: <FaUserCheck size={20} />,
    },
    {
      title: 'User Registered Today',
      value: userData.userRegisteredToday,
      icon: <FaUserPlus size={20} />,
    },
    {
      title: 'User Not Attached With Seller',
      value: userData.userNotAttachedWithSeller,
      icon: <FaUserTimes size={20} />,
    },
    {
      title: 'Total Companies',
      value: userData.totalCompanies,
      icon: <MdBusiness size={24} />,
    },
  ];

  const cardBgColor = '#D9F1FF';
  const textColor = '#0D47A1';

  return (
    <Box sx={{ p: 2, background: '#EBF5FB', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(6, 1fr)',
          },
          gap: 2.5,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 3,
              boxShadow: 'none',
              bgcolor: cardBgColor,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '0.5px solid #12344966',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
              },
            }}
          >
            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                py: 3,
                px: 2,
                height: '100%',
              }}
            >
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: '50%',
                  width: 60,
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1.5,
                  color: textColor,
                }}
              >
                {card.icon}
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  mt: 1,
                }}
              >
                {card.value !== undefined && (
                  <Paper
                    elevation={card.value === 0 ? 0 : 1}
                    sx={{
                      bgcolor: card.value === 0 ? cardBgColor : 'white',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1,
                      px: 1.5,
                    }}
                  >
                    <Typography
                      variant='h5'
                      component='div'
                      align='center'
                      color={textColor}
                      fontWeight='bold'
                      fontSize={14}
                    >
                      {card.value}
                    </Typography>
                  </Paper>
                )}

                <Typography
                  variant='body2'
                  align='center'
                  color={textColor}
                  fontWeight='medium'
                  fontSize={13}
                  sx={{
                    wordBreak: 'break-word',
                    width: '100%',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
