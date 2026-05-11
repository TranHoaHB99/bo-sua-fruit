import { NavLink, Route, Routes } from 'react-router-dom'
import logoImg from './assets/logo-bo-sua-fruit.png'
import productRi6Img from './assets/product-ri6.png'
import productMusakingImg from './assets/product-musaking.png'
import './App.css'

const products = [
  {
    name: 'Sầu riêng Ri6',
    price: '69.000 ₫/kg',
    description:
      'Cơm vàng, dẻo mềm, vị ngọt đậm — phù hợp ăn ngay hoặc làm quà.',
    image: productRi6Img,
  },
  {
    name: 'Sầu riêng Musaking',
    price: '99.000 ₫/kg',
    description:
      'Mùi thơm sang, béo ngọt cân bằng — lựa chọn cao cấp cho người sành ăn.',
    image: productMusakingImg,
  },
]

function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <img
          className="brand-logo"
          src={logoImg}
          alt="Logo Bơ Sữa Fruit"
          width={40}
          height={40}
        />
        <div>
          <p className="brand-title">Bơ Sữa Fruit</p>
          <p className="brand-subtitle">Trái cây đặc sản — sầu riêng chất lượng</p>
        </div>
      </div>
      <nav className="nav">
        <NavLink to="/" end>
          Trang chủ
        </NavLink>
        <NavLink to="/products">Sản phẩm</NavLink>
        <NavLink to="/about">Về chúng tôi</NavLink>
      </nav>
    </header>
  )
}

function ProductCard({ product }) {
  return (
    <article className="product">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <main className="landing">
      <section className="hero">
        <p className="badge">Chuyên sầu riêng từ vườn đến bạn</p>
        <h1>Bơ Sữa Fruit</h1>
        <p className="subtitle">
          Cửa hàng trái cây đặc sản với hai dòng sầu riêng Ri6 và Musaking, ngọt béo,
          giao nhanh trong ngày.
        </p>
        <div className="hero-actions">
          <NavLink className="btn primary" to="/products">
            Xem sản phẩm
          </NavLink>
          <a className="btn secondary" href="#contact">
            Đặt hàng ngay
          </a>
        </div>
      </section>

      <section className="highlights">
        <article className="card">
          <h2>Chọn lọc kỹ</h2>
          <p>Sầu riêng được kiểm tra độ chín, mùi thơm và độ dày cơm.</p>
        </article>
        <article className="card">
          <h2>Đảm bảo tươi mới</h2>
          <p>Đóng gói trong 2 giờ sau tách, bảo quản lạnh đúng chuẩn.</p>
        </article>
        <article className="card">
          <h2>Giao nhanh nội thành</h2>
          <p>Giao hỏa tốc trong 60–120 phút tại khu vực nội thành.</p>
        </article>
      </section>

      <section className="products preview">
        <div className="section-head">
          <h2>Sản phẩm</h2>
          <NavLink className="view-all" to="/products">
            Xem chi tiết
          </NavLink>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Đặt hàng tại Bơ Sữa Fruit</h2>
        <div className="contact-branches">
          <p>
            <strong>Cơ sở 1:</strong> Số nhà 40, ngõ 442 Phạm Văn Đồng, Hà Nội —{' '}
            <a href="tel:+84829841172">0829 841 172</a>
          </p>
          <p>
            <strong>Cơ sở 2:</strong> Cửa hàng Hoà Phát, đối diện trường THPT Đà
            Bắc, xã Đà Bắc, Phú Thọ —{' '}
            <a href="tel:+84984993920">0984 993 920</a>
          </p>
        </div>
      </section>
    </main>
  )
}

function ProductsPage() {
  return (
    <main className="landing">
      <section className="page-intro">
        <h1>Sầu riêng Ri6 &amp; Musaking</h1>
        <p>
          Bơ Sữa Fruit chỉ có hai dòng: Ri6 và Musaking — bán theo kg, đóng gói sạch
          và giao nhanh.
        </p>
      </section>
      <section className="products">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="landing">
      <section className="page-intro">
        <h1>Về Bơ Sữa Fruit</h1>
        <p>
          Chúng tôi xây dựng mô hình trái cây đặc sản, tập trung sầu riêng Ri6 và
          Musaking với giá minh bạch theo kg.
        </p>
      </section>
      <section className="about-grid">
        <article className="card">
          <h2>Sứ mệnh</h2>
          <p>
            Đưa trái cây sạch, nguồn gốc rõ ràng, chất lượng ổn định đến mọi gia
            đình.
          </p>
        </article>
        <article className="card">
          <h2>Quy trình</h2>
          <p>
            Thu mua tại vườn đối tác, soạn lọc theo tiêu chuẩn nội bộ và theo dõi
            nhiệt độ bảo quản.
          </p>
        </article>
        <article className="card">
          <h2>Dịch vụ</h2>
          <p>
            Hỗ trợ chọn quả theo nhu cầu, đóng gói quà tặng và giao hỏa tốc mỗi
            ngày.
          </p>
        </article>
      </section>
    </main>
  )
}

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Kênh đặt hàng nhanh">
      <a
        className="floating zalo"
        href="https://zalo.me/0829841172"
        target="_blank"
        rel="noreferrer"
      >
        Đặt qua Zalo
      </a>
      <a
        className="floating facebook"
        href="https://www.facebook.com/profile.php?id=61589616927517"
        target="_blank"
        rel="noreferrer"
      >
        Đặt qua Facebook
      </a>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <FloatingActions />
    </>
  )
}

export default App
