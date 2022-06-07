module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "worktable-bg": "url('/src/asset/img/worktable.jpg')",
                "tv-bg": "url('/src/asset/img/tv.png')",
                "tvscreen-bg": "url('/src/asset/img/walltv.png')",
                
            
            },
        },
    },
    daisyui: {
        themes: [
            {
                nextminitheme: {
                    primary: "#3C4043",
                    secondary: "#1A73E8",
                    accent: "#FFFFFF",
                    neutral: "#3d4451",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
