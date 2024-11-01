import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Mochila TECH
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Conteúdo principal */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" color="#1976D2">
            Manutenção e Upgrade de Computadores
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={2}>
            Manter seu computador com a pasta térmica adequada garante maior desempenho e vida útil.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: '100%', md: '60%' },
              boxShadow: 4,
              borderRadius: 2,
              bgcolor: '#ffffff',
              color: 'text.primary',
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="280"
                image="./manutencao.jpg"
                alt="Serviço de Manutenção"
              />
              <CardContent>
                <Typography variant="h5" component="div" color="#1976D2">
                  Troca de Pasta Térmica e Manutenção
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  Realizar a troca da pasta térmica a cada 6 meses ajuda a manter a performance do seu computador e a prolongar a vida útil de componentes como processador e placa-mãe.
                </Typography>
                <Typography variant="body2" mt={2} color="#1976D2">
                  <a href="https://canaltech.com.br/hardware/pasta-termica-o-que-e-pra-que-serve-e-como-troca-la/" style={{ color: '#1976D2', textDecoration: 'none' }}>
                    <b>Saiba Mais</b>
                  </a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.text}>© 2024 Mochila TECH. Todos os direitos reservados.</p>
          <div style={styles.links}>
            <a href="#services" style={styles.link}>Serviços</a>
            <a href="#sales" style={styles.link}>Vendas</a>
            <a href="#contact" style={styles.link}>Contato</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ResponsiveAppBar;

const styles = {
  footer: {
    backgroundColor: '#1976D2',
    padding: '20px 0',
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: '0',
    fontSize: '16px',
  },
  links: {
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '14px',
  },
};
