export const metadata = { title: "Hướng dẫn xóa dữ liệu - Kho Sỉ Pin giá rẻ" };

const wrap = { maxWidth: 760, margin: "0 auto", padding: "32px 20px", fontFamily: "system-ui, sans-serif", lineHeight: 1.7, color: "#222" };

export default function DataDeletion() {
  return (
    <main style={wrap}>
      <h1>Hướng dẫn xóa dữ liệu người dùng</h1>
      <p>
        Nếu bạn muốn xóa dữ liệu đã trò chuyện với chatbot của <b>Kho Sỉ Pin giá rẻ</b>, hãy thực hiện một trong hai cách:
      </p>
      <ol>
        <li>
          Gửi email tới <a href="mailto:tranhuong.98nb@gmail.com">tranhuong.98nb@gmail.com</a> với tiêu đề &quot;Yêu cầu xóa
          dữ liệu&quot;, kèm tên Facebook của bạn.
        </li>
        <li>Hoặc nhắn tin trực tiếp cho Fanpage của chúng tôi với nội dung &quot;Xóa dữ liệu của tôi&quot;.</li>
      </ol>
      <p>Chúng tôi sẽ xóa dữ liệu liên quan đến bạn trong vòng 7 ngày làm việc và xác nhận lại qua email hoặc tin nhắn.</p>
    </main>
  );
}
