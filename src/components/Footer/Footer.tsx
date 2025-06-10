import "../../index.css"

const social =  [
          {
            "name": "github",
            "url": "https://github.com/amar3344",
            "class": "fab fa-github"
          },
          {
            "name": "instagram",
            "url": "https://www.instagram.com",
            "class": "fab fa-instagram"
          }
        ]

export default function Footer() {
    const networks = social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
  return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                Amar kumar Reddy
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
}
