/**
 * ====================================================================
 *                 DIỆU LINH BIO - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Professional English Configuration & Elite Bio Information
 */

const CONFIG = {
    // 0. TÊN WEB (hiện ở tiêu đề tab, gõ chữ xoá chữ lặp lại trong script.js).
    siteName: "@Dieu Linh",

    // 1. DISCORD USER ID:
    discordId: "1071450431395483658",

    // 2. THÔNG TIN PROFILE (tĩnh, không liên kết Discord):
    profile: {
        name: "Diệu Linh",
        // true  = tên trên card lấy theo tên hiển thị Discord (đồng bộ realtime)
        // false = luôn giữ đúng "name" ở trên, bỏ qua tên tài khoản Discord
        syncNameWithDiscord: true,
        username: "chilanoidau",
        title: "Gamer • Music Lover • Coffee Addict",
        avatar: "https://cdn.discordapp.com/avatars/1222143238056574990/cd20117cf2a6a045b8dd4b62cc048320.png?size=256",
        // Ảnh dự phòng local khi cdn.discordapp.com bị nhà mạng chặn
        avatarLocal: "avatar-linh.png",
        banner: "banner_executive.webp",
        bio: "Fragile and delicate, hoping to be pampered by a man.",
        location: "Hà Nội, Việt Nam",
        quotes: [
            "Gaming, coffee & good vibes.",
            "Living one chill day at a time.",
            "Music on, worries off.",
            "Collecting moments, not things."
        ],
        badges: [
            { icon: "fa-solid fa-gamepad", label: "Gamer", color: "#ffffff" },
            { icon: "fa-solid fa-headphones", label: "Music Lover", color: "#e0e0e0" },
            { icon: "fa-solid fa-mug-hot", label: "Coffee Addict", color: "#ffffff" },
            { icon: "fa-solid fa-plane", label: "Traveler", color: "#d1d5db" },
            { icon: "fa-solid fa-camera", label: "Photography", color: "#a1a1aa" },
            { icon: "fa-solid fa-film", label: "Movie Buff", color: "#ffffff" }
        ]
    },

    // 3. DANH SÁCH DISCORD SERVER:
    servers: [
        {
            // Tên, avatar, số thành viên & số online sẽ được cập nhật real-time từ Discord
            // (script.js gọi api discord.com/api/v9/invites/{code}?with_counts=true)
            name: "1 mình em",
            role: "Cộng đồng 1 mình em",
            description: "Vào đây để được em thương moah moah.",
            // Invite vĩnh viễn (không có expires_at) — kiểm tra bằng API invites/{code}?with_counts=true
            inviteUrl: "https://discord.gg/hB4jVUtxs",
            icon: "https://cdn.discordapp.com/icons/1267096791443312734/cd3ef9fd53d343c4c735e0640a6fb9c9.png?size=256",
            // Server này chưa có banner riêng nên dùng ảnh local làm ảnh nền dự phòng
            banner: "profile_banner_cyber.webp",
            cdnIcon: "https://cdn.discordapp.com/icons/1267096791443312734/cd3ef9fd53d343c4c735e0640a6fb9c9.png?size=256",
            cdnBanner: "profile_banner_cyber.webp",
            members: "1 Members",
            online: "1 Online",
            tag: "Yêu",
            featured: true
        }
    ],

    // 4. MẠNG XÃ HỘI / LIÊN HỆ (DIRECT CONNECTIONS):
    // Mục có field "copy" sẽ KHÔNG mở link — click là sao chép giá trị đó + toast thông báo.
    socials: [
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/dieu.linhiuu" },
        { name: "Email", icon: "fa-solid fa-envelope", url: "", copy: "thuylinhcutimoahmoah2007@gmai.com" },
        { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@nlwo2" },
        { name: "Spotify", icon: "fa-brands fa-spotify", url: "https://open.spotify.com/user/31qttkds2lxweu7s5qxqrms2ab2i?si=d5a2f7b40b2e412f" },
        // Mục có action: "donate" KHÔNG mở link — bấm là hiện ảnh QR ở giữa màn hình.
        // highlight: true -> nút nổi bật, chiếm trọn một hàng (xem mục `donate` bên dưới)
        { name: "Donate", icon: "fa-solid fa-qrcode", action: "donate", highlight: true }
    ],

    // 4.2 ỦNG HỘ (DONATE) — bấm nút Donate sẽ hiện ảnh QR ngân hàng giữa màn hình
    donate: {
        // Tên file ảnh QR, đặt cùng thư mục với index.html.
        // Khi chưa có file, hộp thoại hiện khung hướng dẫn thay vì ảnh vỡ.
        // Chỉ cần đặt ảnh vào repo với đúng tên này là QR tự hiện, không phải sửa code.
        qrImage: "qr-cua-linh.png",
        // Thông tin chuyển khoản — dòng nào để trống "" thì tự ẩn
        bankName: "",
        accountName: "",
        accountNumber: "",
        note: ""
    },

    // 5. NHẠC NỀN & PLAYLIST (AUDIO PLAYLIST):
    music: {
        autoplayOnEnter: true,
        // 1 = mở trang là thanh âm lượng đã kéo sẵn tối đa (0.5 = một nửa...)
        volume: 1,
        playlist: [
            {
                title: "Không Yêu Xin Đừng Nói",
                artist: "Diệu Linh",
                url: "khong-yeu-xin-dung-noi.mp3"
            },
            {
                title: "Mưa Đợi Chờ",
                artist: "Diệu Linh",
                url: "bai1.mp3"
            },
            {
                title: "Trái Tim Em Cũng Biết Đau x Yêu Kiều",
                artist: "Diệu Linh",
                url: "trai-tim-em-cung-biet-dau-x-yeu-kieu.mp3"
            },
            {
                title: "Ai Ngoài Anh",
                artist: "Diệu Linh",
                url: "ai-ngoai-anh.mp3"
            }
        ],
        // Default / Initial Track Fallback
        title: "Không Yêu Xin Đừng Nói",
        artist: "Diệu Linh",
        url: "khong-yeu-xin-dung-noi.mp3"
    },

    // 6. HIỆU ỨNG:
    effects: {
        enableTilt: true,
        enableSpotlight: true,
        enableCustomCursor: true,
        enableParticles: true,
        enableShootingStars: true
    },

    // 7. SỞ THÍCH & PHONG CÁCH SỐNG (CORE - 6 PILLARS):
    techStack: [
        { name: "Gaming", domain: "PC • Mobile • Co-op", icon: "fa-solid fa-gamepad" },
        { name: "Nghe nhạc", domain: "Lofi • Chill • V-Pop", icon: "fa-solid fa-headphones" },
        { name: "Cà phê", domain: "Sáng • Sữa đá • Góc chill", icon: "fa-solid fa-mug-hot" },
        { name: "Du lịch", domain: "Biển • Núi • Khám phá", icon: "fa-solid fa-plane" },
        { name: "Chụp ảnh", domain: "Khoảnh khắc • Đời thường", icon: "fa-solid fa-camera" },
        { name: "Xem phim", domain: "Anime • Phim lẻ • Series", icon: "fa-solid fa-film" }
    ]
};



