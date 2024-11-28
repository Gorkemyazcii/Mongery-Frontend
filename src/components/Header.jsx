function Header({ totalProfit }) {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-100 border-b">
      <h1 className="text-2xl font-bold">Karlılık</h1>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-medium">Toplam Bakiye:</span>
        <span className="text-2xl font-bold text-green-600">
          {totalProfit} USD
        </span>
      </div>
    </div>
  );
}

export default Header;
