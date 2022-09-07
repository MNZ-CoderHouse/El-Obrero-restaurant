import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4"> Sobre Nosotros </h1>
            <p className="lead mb-4">
              Nuestra empresa es líder en el sector desde hace 25 años. Contamos
              con los mejores especialistas del mercado para asesorarte.
            </p>
            <p className="lead mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempore inventore eligendi praesentium, temporibus harum
              repudiandae, error esse ex, amet excepturi odio. Libero ipsa omnis
              dolorum ut ipsam, suscipit nihil. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Optio corporis eveniet perferendis
              impedit dicta enim eum voluptatem deserunt sapiente repudiandae
              qui saepe vel rerum sit vitae, ab debitis corrupti voluptas.\
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempore inventore eligendi praesentium, temporibus harum
              repudiandae, error esse ex, amet excepturi odio. Libero ipsa omnis
              dolorum ut ipsam, suscipit nihil. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Optio corporis eveniet perferendis
              impedit dicta enim eum voluptatem deserunt sapiente repudiandae
              qui saepe vel rerum sit vitae, ab debitis corrupti voluptas.
            </p>
            <NavLink to={"/contact"} className={"btn btn-outline-primary px-3"}>
              {" "}
              Contactanos{" "}
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/img/about.png"
              alt="sobre nosotros"
              height="600px"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
