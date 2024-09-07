function footer() {
  return (
    <div>
      <footer className="p-4 footer footer-center bg-base-200 text-base-content">
        <aside>
          <p className="">
            Copyright © {new Date().getFullYear()} - Whirl
            <p className="mt-2 text-sm text-slate-500">
              Built with ⚛️ React and 🌻 DaisyUI
            </p>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default footer;
