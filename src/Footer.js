const Footer = () => {
    const year = new Date();
  return (
    <footer className="Footer">
      Copyright &copy; {year.getFullYear()} 
    </footer>
  )
}

export default Footer