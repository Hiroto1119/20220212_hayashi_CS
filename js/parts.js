'use strict';
{
  const $hdr_main = document.getElementById('hdr_main');
  $hdr_main.insertAdjacentHTML('afterbegin', `<header>
    <h1>
      <a href="index.html">TECH</a>
    </h1>
    <nav class="pc-nav">
      <ul>
        <li class="header-li"><a class="header-a" href="index.html">ホーム</a></li>
        <li class="header-li"><a class="header-a" href="service.html">事業内容</a></li>
        <li class="header-li"><a class="header-a" href="news.html">ニュース</a></li>
        <li class="header-li"><a class="header-a" href="blog.html">社員ブログ</a></li>
        <li class="header-li"><a class="header-a" href="company.html">会社概要</a></li>
        <li class="header-li"><a class="header-a" href="recruit.html">採用情報</a></li>
        <li class="header-li"><a class="header-a" href="contact.html">お問い合わせ</a></li>
      </ul>
    </nav>
    <nav class="sp-nav" id="sp-nav">
      <ul>
        <li class="sp-nav-li"><a class="sp-nav-a" href="index.html">ホーム</a></li>
        <li class="sp-nav-li"><a class="sp-nav-a" href="service.html">事業内容</a></li>
        <li class="sp-nav-li"><a class="sp-nav-a" href="news.html">ニュース</a></li>
        <li class="sp-nav-li"><a class="sp-nav-a" href="blog.html">社員ブログ</a></li>
        <li class="sp-nav-li"><a class="sp-nav-a" href="company.html">会社概要</a></li>
        <li class="sp-nav-li"><a class="sp-nav-a" href="recruit.html">採用情報</a></li>
        <li class="sp-nav-li"><a class="sp-nav-a" href="contact.html">お問い合わせ</a></li>
      </ul>
    </nav>
    <div class="menu" id="menu">
      <span class="menu__line--top"></span>
      <span class="menu__line--middle"></span>
      <span class="menu__line--bottom"></span>
    </div>
  </header>`);

  const $ftr_main = document.getElementById('ftr_main');
  $ftr_main.insertAdjacentHTML('afterbegin', `<footer>
    <div class="footer-menu">
      <p>©2020 TECH inc.</p>
      <ul>
        <li class="footer-li"><a class="footer-a" href="#">ニュース</a></li>
        <li class="footer-li"><a class="footer-a" href="#">社員ブログ</a></li>
        <li class="footer-li"><a class="footer-a" href="#">ホーム</a></li>
        <li class="footer-li"><a class="footer-a" href="#">会社概要</a></li>
        <li class="footer-li"><a class="footer-a" href="#">採用情報</a></li>
        <li class="footer-li"><a class="footer-a" href="#">お問い合わせ</a></li>
        <li class="footer-li"><a class="footer-a" href="#">事業内容</a></li>
      </ul>
    </div>
  </footer>`);  
}