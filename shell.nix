{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20 # Node.js
    pnpm # pnPm
    nixfmt # Nix formatter
  ];

  # Shell hook to set up environment
  shellHook = "";
}
