{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs # Node.js
    pnpm # pnPm
    pre-commit # Pre-commit
    nixfmt # Nix formatter
    just # Just
  ];

  # Shell hook to set up environment
  shellHook = ''
    just install
  '';
}
