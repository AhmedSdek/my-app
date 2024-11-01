import { IconButton, Stack, Tooltip } from '@mui/material';
import './App.css';
import img from './new.jpeg'
import { Call, Facebook, FacebookOutlined, Instagram } from '@mui/icons-material';
function App() {
  const data = [
    {
      text: ' Fresh Bar Menu',
      url: 'https://drive.google.com/file/d/13t5TgiA3JGHe-UK2iQNuBUS-tyaEwOv1/view'
    },
    {
      text: 'Maadi Location',
      url: 'https://www.google.com.eg/maps/place/Fresh+Bar+-+%D9%81%D8%B1%D9%8A%D8%B4+%D8%A8%D8%A7%D8%B1%E2%80%AD/@29.9795032,31.3232923,17.26z/data=!4m7!3m6!1s0x1458391036f77857:0x909f99ab38b896ad!8m2!3d29.9795287!4d31.3241247!15sCg_Zgdix2YrYtCDYqNin2LGSARBzb2Z0X2RyaW5rc19zaG9w4AEA!16s%2Fg%2F11sv0z662s?entry=tts&g_ep=EgoyMDI0MTAyOS4wIPu8ASoASAFQAw%3D%3D'
    },
    {
      text: 'Number 1',
      url: 'tel:01122611810',
      icon: 'yes'
    },
    {
      text: 'Number 2',
      url: 'tel:01001270203',
      icon: 'yes'
    }
  ]
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(1deg, #86c8d4, #7cc7a9, #7dc8a7)', position: 'relative', flexDirection: 'column', gap: '10px', minHeight: '100vh' }}>
      <div style={{ width: '300px', height: '300px', position: 'absolute', top: '-60px' }}>
        <img style={{ width: '100%', height: '100%' }} src={img} alt='' />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', width: '100%', marginTop: '170px', zIndex: '10' }}>
        {data.map((item, index) => {
          return (
            <Stack sx={{ width: { xs: '90%', sm: '70%', md: '60%' } }} key={index}>
              <a style={{ textDecoration: 'none', backgroundColor: 'white', padding: '20px', display: 'flex', borderRadius: '15px', textAlign: 'center', fontWeight: 'bold', fontSize: '40px', color: '#009459', justifyContent: 'center', alignItems: 'center' }} href={item.url} >
                {item.icon &&
                  <Call style={{ fontSize: '40px' }} />
                }  {item.text}
              </a>
            </Stack>

          )
        })}
      </div>
      <Stack sx={{ flexDirection: 'row', gap: 2 }}>
        <IconButton>
          <FacebookOutlined color='primary' sx={{ width: '100px', height: '100px' }} />
        </IconButton>
        <IconButton>
          <Instagram color='secondary' sx={{ width: '100px', height: '100px' }} />
        </IconButton>
      </Stack>
    </div>
  );
}

export default App;
