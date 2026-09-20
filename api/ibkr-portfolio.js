export default async function handler(req, res) {
  try {
    const token = process.env.IBKR_AUTH_TOKEN;
    if (!token) return res.status(500).json({ error: 'No IBKR token' });
    
    const response = await fetch('https://api.ibkr.com/v1/portfolio', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    res.json(await response.json());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
