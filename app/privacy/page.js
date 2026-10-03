export const metadata = { title: "Chính sách quyền riêng tư - Kho Sỉ Pin giá rẻ" };

const wrap = { maxWidth: 760, margin: "0 auto", padding: "32px 20px", fontFamily: "system-ui, sans-serif", lineHeight: 1.7, color: "#222" };

export default function Privacy() {
  return (
    <main style={wrap}>
      <h1>Chính sách quyền riêng tư</h1>
      <p>Cập nhật lần cuối: 03/10/2026</p>
      <p>
        Chính sách này áp dụng cho ứng dụng trò chuyện tự động (chatbot) của <b>Kho Sỉ Pin giá rẻ</b> hoạt động trên
        Facebook Messenger (sau đây gọi là &quot;chúng tôi&quot;).
      </p>

      <h2>1. Thông tin chúng tôi thu thập</h2>
      <ul>
        <li>Nội dung tin nhắn bạn gửi tới Fanpage của chúng tôi trên Messenger.</li>
        <li>Mã định danh người dùng theo trang (Page-scoped ID), tên và ảnh đại diện công khai do Facebook cung cấp.</li>
        <li>Thông tin bạn tự nguyện cung cấp khi đặt hàng: họ tên, số điện thoại, địa chỉ nhận hàng.</li>
      </ul>

      <h2>2. Mục đích sử dụng</h2>
      <ul>
        <li>Trả lời câu hỏi về sản phẩm, giá cả, tình trạng hàng.</li>
        <li>Tiếp nhận và xử lý đơn hàng, giao hàng và chăm sóc sau bán.</li>
        <li>Cải thiện chất lượng tư vấn của chúng tôi.</li>
      </ul>

      <h2>3. Chia sẻ thông tin</h2>
      <p>
        Chúng tôi không bán thông tin cá nhân của bạn. Thông tin chỉ được chia sẻ với đơn vị vận chuyển (khi giao hàng)
        và các nhà cung cấp dịch vụ kỹ thuật cần thiết để vận hành chatbot (lưu trữ, xử lý ngôn ngữ), hoặc khi pháp luật
        yêu cầu.
      </p>

      <h2>4. Lưu trữ và bảo mật</h2>
      <p>
        Dữ liệu được lưu trên hệ thống có kiểm soát truy cập. Chúng tôi chỉ giữ dữ liệu trong thời gian cần thiết cho
        các mục đích nêu trên.
      </p>

      <h2>5. Quyền của bạn</h2>
      <p>
        Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa dữ liệu của mình. Xem hướng dẫn tại{" "}
        <a href="/data-deletion">trang xóa dữ liệu</a>.
      </p>

      <h2>6. Liên hệ</h2>
      <p>
        Email: <a href="mailto:tranhuong.98nb@gmail.com">tranhuong.98nb@gmail.com</a>
      </p>
    </main>
  );
}
