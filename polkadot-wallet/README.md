# Polkadot Wallet App

A modern Next.js application to connect and interact with Polkadot wallets using official Polkadot libraries.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **@polkadot/api** - Official library to interact with the Polkadot blockchain
- **@polkadot/extension-dapp** - Library to connect with wallet extensions
- **Lucide React** - Modern SVG icons

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **A Polkadot wallet extension** (Polkadot.js, Talisman, SubWallet, etc.)

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository>
   cd polkadot-wallet
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:**
   Go to [http://localhost:3000](http://localhost:3000)

## 🔗 How to Connect Your Wallet

1. **Install a wallet extension** (Polkadot.js, Talisman, SubWallet, etc.)
2. **Create or import an account** in the extension
3. **Click "Connect Wallet"** in the app and authorize the connection
4. **Select your account** and view your balance and address

## 🗂️ Project Structure

```
polkadot-wallet/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   └── layout.tsx        # App layout
│   └── components/
│       └── WalletConnect.tsx # Main wallet component
├── public/                   # Static files
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
```

## ✅ Features

- Connect with Polkadot wallet extensions
- List available accounts
- Select active account
- Display DOT balance
- Show account address
- Responsive and modern interface
- Disconnect wallet

## 🎨 Customization

- **Colors:** Edit `tailwind.config.ts` to change main colors.
- **Components:** Style Radix UI components using Tailwind CSS classes.

## 🛠️ Troubleshooting

- **No account found:** Ensure a wallet extension is installed and active.
- **Connection error:** Check your internet connection and RPC endpoint.
- **Balance error:** Make sure you are connected to the correct network.

## 📚 Additional Resources

- [Polkadot API Documentation](https://polkadot.js.org/docs/api/)
- [Polkadot Extension DApp Docs](https://polkadot.js.org/docs/extension/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/)

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.

## 🆘 Support

If you have any issues or questions, open an issue on the repository or contact us.

---

**Developed with ❤️ for the Polkadot ecosystem**
