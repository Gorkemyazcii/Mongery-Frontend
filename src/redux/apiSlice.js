useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/orders");
      const data = await response.json();
      console.log("Veri geldi:", data); // Gelen veriyi kontrol et
    } catch (error) {
      console.log("Hata:", error); // Hata mesajını kontrol et
    }
  };

  fetchData();
}, []);
