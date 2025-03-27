function Navigation() {
    const name = "Ravishka";
    return (
        <nav className="flex items-center justify-between py-4 px-16 bg-blue-900">
        <div className="flex items-center gap-x-16">
          
          <div className="flex items-center gap-x-4">
            <a href="/">Home</a>
            <a href="/shop">Resevations</a>
            <a href="/">Our Trips</a>
          </div>
        </div>
        <a href="/" className="flex items-center">
            <img src="/assets/navigation/logo.png" alt="logo" className="w-20 h-auto"/>
          </a>
        
        <div className="flex items-center gap-x-8">
          <p>Hi, {name}</p>
        </div>
      </nav>
    );
}

export default Navigation;