

const Footer = () => {
  return (
    <footer className="bg-secondary text-light mt-5">
      <div className="container py-4">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-3">
            <h5>CarVista</h5>
            <p className="small">
             CarDealership is an online automotive marketplace that enables customers to conveniently browse, compare, and purchase new and pre-owned vehicles from the comfort of their homes. The platform offers a wide selection of cars, SUVs complete with detailed specifications, transparent pricing, and vehicle history information to support informed decision-making. With a focus on simplicity and customer satisfaction, Carvista also provides flexible financing options, trade-in services, and secure digital transactions, aiming to modernize the traditional car-buying experience through efficiency, trust, and convenience.

            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h5>Click on the Links below for more.</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="small mb-1">Email: frankkimathi796@gmail.com</p>
            <p className="small mb-1">Phone: +254 74 672 047 77</p>
            <p className="small">Location: Westlands,Nairobi,Kenya</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary text-center py-2">
        <small>© {new Date().getFullYear()} Car Dealership. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer