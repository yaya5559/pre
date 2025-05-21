import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate('/maps');
  };

  const items = [
    'Funding per Capita vs Homeless Rate',
    'Funding per Homeless vs Homeless Rate',
    'Total Population vs Homeless Rate',
  ];

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>U.S. Homelessness Insights Dashboard</h1>
        <p style={styles.subtitle}>
          Explore data visualizations of homelessness across the U.S. by federal funding,
          population, and racial demographics. Powered by Shiny + React.
        </p>
      </header>

      {/* Body */}
      <div style={styles.body}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Explore Visualizations</h3>
          <ul style={styles.navList}>
            {items.map((item, index) => (
              <li key={index} style={styles.navItem}>
                {item}
              </li>
            ))}
          </ul>

          <button style={styles.mapButton} onClick={handleMapClick}>
            View Racial Demographics Map
          </button>
        </aside>

        {/* Main iframe */}
        <main style={styles.iframeWrapper}>
          <iframe
            title="Shiny Dashboard"
            src="https://yaahya.shinyapps.io/shinyapp/"
            style={styles.iframe}
          />
        </main>
      </div>
    </div>
  );
}

const styles = {
  app: {
    backgroundColor: '#121212',
    color: '#eee',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    height: '100vh',
    width: '100vw',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '40px',
    backgroundColor: '#1a1a1a',
    borderBottom: '1px solid #333',
    boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },
  subtitle: {
    marginTop: '10px',
    fontSize: '1.1rem',
    color: '#cccccc',
    maxWidth: '700px',
    marginInline: 'auto',
  },
  body: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
  },
  sidebar: {
    width: '300px',
    backgroundColor: '#1e1e1e',
    padding: '20px',
    overflowY: 'auto',
    borderRight: '1px solid #333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sidebarTitle: {
    color: '#bbb',
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '12px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  navItem: {
    padding: '10px 12px',
    marginBottom: '8px',
    color: '#ccc',
    borderRadius: '6px',
    backgroundColor: '#2a2a2a',
    cursor: 'default',
  },
  mapButton: {
    marginTop: '20px',
    padding: '12px 16px',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#4e79a7',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  iframeWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};
