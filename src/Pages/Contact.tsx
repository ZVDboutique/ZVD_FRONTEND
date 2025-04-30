import { Box, Container, TextField, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import diamondSmall from '../assets/diamond-small.svg';
import diamondLarge from '../assets/diamond-large.svg';
import heroSectionBg from '../assets/heroSectionBg.svg';

const Contact = () => {
  return (
    <Container maxWidth='xl' sx={{ py: 4, px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
      <Box
        sx={{
          backgroundImage: `url(${heroSectionBg})`,
          bgcolor: '#90D5FF33',
          pl: {
            xs: 3,
            sm: 4,
            md: 7,
          },
          pt: {
            xs: 4,
            sm: 5,
            md: 7,
          },
          pb: {
            xs: 6,
            md: 7,
          },
          borderRadius: {
            xs: 3,
            md: 6,
          },
          position: 'relative',
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: {
            xs: '280px',
            sm: '320px',
            md: '380px',
          },
          overflow: 'hidden',
        }}
      >
        <Box
          component='img'
          src={diamondSmall}
          alt='Diamond'
          sx={{
            position: 'absolute',
            height: {
              xs: '140px',
              sm: '180px',
              md: '200px',
            },
            objectFit: 'contain',
            left: {
              xs: '-5%',
              sm: '-2%',
              md: '-1%',
            },
            bottom: 0,
            zIndex: 2,
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
            display: { xs: 'none', sm: 'block' },
          }}
        />

        <Box
          component='img'
          src={diamondLarge}
          alt='Diamond'
          sx={{
            position: 'absolute',
            height: {
              xs: '160px',
              sm: '200px',
              md: '240px',
            },
            objectFit: 'contain',
            right: {
              xs: '-5%',
              sm: '0',
              md: '3%',
            },
            bottom: 0,
            zIndex: 2,
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
            display: { xs: 'none', sm: 'block' },
          }}
        />

        <Typography
          variant='h1'
          component='h1'
          sx={{
            fontWeight: 600,
            color: '#1a1a1a',
            textAlign: 'center',
            zIndex: 1,
            mb: 1,
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
            },
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            color: '#666',
            textAlign: 'center',
            zIndex: 1,
            fontSize: {
              xs: '0.9rem',
              sm: '1rem',
              md: '1.1rem',
            },
            px: 2,
          }}
        >
          We are Here to Answer Your Question
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { md: 'wrap' },
          gap: { xs: 3, md: 4 },
          mb: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontWeight: 'bold',
              color: '#1a1a1a',
              mb: 2,
              fontSize: {
                xs: '1.8rem',
                sm: '2rem',
                md: '2.5rem',
              },
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant='body1'
            sx={{
              color: '#666',
              mb: { xs: 3, md: 4 },
              maxWidth: '90%',
            }}
          >
            Feel free to use the form or drop us an email. Old-fashioned phone
            calls work too.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 3 },
              justifyContent: { xs: 'space-between', md: 'flex-start' },
            }}
          >
            {/* Phone */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                width: { xs: '100%', sm: '45%' },
                backgroundColor: '#f0f7fc',
                p: { xs: 2, md: 2 },
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  p: 1,
                  mr: 1.5,
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PhoneIcon sx={{ color: '#1976d2' }} />
              </Box>
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{ fontWeight: 'bold', mb: 0.5 }}
                >
                  Phone
                </Typography>
                <Typography variant='body2' sx={{ color: '#666' }}>
                  +91 12345 67890
                </Typography>
              </Box>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                width: { xs: '100%', sm: '45%' },
                backgroundColor: '#f0f7fc',
                p: { xs: 2, md: 2 },
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  p: 1,
                  mr: 1.5,
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EmailIcon sx={{ color: '#1976d2' }} />
              </Box>
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{ fontWeight: 'bold', mb: 0.5 }}
                >
                  Email
                </Typography>
                <Typography variant='body2' sx={{ color: '#666' }}>
                  zvd-diamond@gmail.com
                </Typography>
              </Box>
            </Box>

            {/* Address */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                width: { xs: '100%', sm: '45%' },
                backgroundColor: '#f0f7fc',
                p: { xs: 2, md: 2 },
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  p: 1,
                  mr: 1.5,
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LocationOnIcon sx={{ color: '#1976d2' }} />
              </Box>
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{ fontWeight: 'bold', mb: 0.5 }}
                >
                  Address
                </Typography>
                <Typography variant='body2' sx={{ color: '#666' }}>
                  India diamond Hub
                </Typography>
              </Box>
            </Box>

            {/* Instagram */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                width: { xs: '100%', sm: '45%' },
                backgroundColor: '#f0f7fc',
                p: { xs: 2, md: 2 },
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  p: 1,
                  mr: 1.5,
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <InstagramIcon sx={{ color: '#1976d2' }} />
              </Box>
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{ fontWeight: 'bold', mb: 0.5 }}
                >
                  Instagram
                </Typography>
                <Typography variant='body2' sx={{ color: '#666' }}>
                  Instagram ID
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: '1 1 500px',
            backgroundColor: '#f0f7fc',
            padding: { xs: 2.5, md: 3.5 },
            borderRadius: 2,
            order: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ mb: 1.5 }}>
            <Typography
              variant='subtitle1'
              sx={{ mb: 0.75, fontWeight: 'medium' }}
            >
              Name
            </Typography>
            <TextField
              fullWidth
              variant='outlined'
              placeholder='Jonathan John'
              size='small'
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 1,
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Typography
              variant='subtitle1'
              sx={{ mb: 0.75, fontWeight: 'medium' }}
            >
              Email
            </Typography>
            <TextField
              fullWidth
              variant='outlined'
              placeholder='abc@gmail.com'
              type='email'
              size='small'
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 1,
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Typography
              variant='subtitle1'
              sx={{ mb: 0.75, fontWeight: 'medium' }}
            >
              Phone
            </Typography>
            <TextField
              fullWidth
              variant='outlined'
              placeholder='+91 12345 67890'
              size='small'
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 1,
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant='subtitle1'
              sx={{ mb: 0.75, fontWeight: 'medium' }}
            >
              Message
            </Typography>
            <TextField
              fullWidth
              variant='outlined'
              multiline
              rows={3}
              placeholder='I am Happy to Contact with you'
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 1,
                  },
                },
              }}
            />
          </Box>
          <Button
            variant='contained'
            size='large'
            sx={{
              backgroundColor: '#0c3c60',
              color: '#fff',
              borderRadius: 1,
              py: 1.5,
              fontWeight: 'bold',
              width: '100%',
              '&:hover': {
                backgroundColor: '#072a43',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          mb: 8,
          mx: { xs: 0, md: 2 },
          borderRadius: { xs: '8px', md: '16px' },
          overflow: 'hidden',
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            height: { md: '380px' },
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '380px' },
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#f0f7fc',
              gap: 2.5,
              p: 2.5,
            }}
          >
            <Box
              sx={{
                bgcolor: '#d1e9ff',
                p: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  color: '#0c3c60',
                  mb: 0.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                New York
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: '#555',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                }}
              >
                47 W 13th St, New York, NY 10011, USA
              </Typography>
            </Box>

            <Box
              sx={{
                p: 3,
                borderRadius: 0,
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  color: '#0c3c60',
                  mb: 0.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                India
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: '#555',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                }}
              >
                Shivsena Office, 468-b, J S S Road, Chira Bazar Mumbai
              </Typography>
            </Box>

            <Box
              sx={{
                p: 3,
                borderRadius: 0,
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  color: '#0c3c60',
                  mb: 0.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                London
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: '#555',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                }}
              >
                Travessa Guilhermina 1558 Teófilo Otoni
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              position: 'relative',
              height: { xs: '300px', md: 'auto' },
              '& iframe': {
                border: 'none',
                width: '100%',
                height: '100%',
              },
            }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596662037!2d-74.25987368715493!3d40.69714940985223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1651922304257!5m2!1sen!2sin'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Location Map'
              style={{ display: 'block' }}
            ></iframe>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
