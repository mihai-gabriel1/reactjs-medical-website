import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <div id="topbar" class="d-flex align-items-center d-xs-none">
        <div class="container d-flex justify-content-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope"></i>
            <a href="mailto:example@example.com">pneumotherapy@yahoo.com</a>
            <i class="bi bi-telephone"></i> 0725 596 895
            <i class="bi bi-telephone"></i> 0724 284 956
          </div>

          <div class="d-none d-lg-flex social-links align-items-center">
            <a
              href="https://www.facebook.com/drAliCrantaPneumolog/"
              class="facebook"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
