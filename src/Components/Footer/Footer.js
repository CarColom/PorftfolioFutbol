import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faWhatsapp  } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
 
    return (
        <footer id="contacto" className="bg-dark-green text-white py-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="md:mb-0 text-center md:text-left mb-6 md:mb-0">
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Contacto</h2>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://wa.me/5493412137880" className="text-xl">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="mailto:juanchiicettou17@gmail.com" className="text-xl">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              </div>
      
              <div>
                <h2 className="text-xl justify-center font-semibold mb-2">Redes Sociales</h2>
                <div className="flex justify-center  md:justify-start">
                  <a href="https://instagram.com/juanchicettou?igshid=YmMyMTA2M2Y=" className="text-xl">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
      
            <div>
              <p className="text-sm text-center">&copy; 2024. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      );

 }

export default Footer;