{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
    pnpm
    biome
  ];

  shellHook = ''
    echo "ansuit dev environment"
    echo "Node: $(node --version)"
    echo "pnpm: $(pnpm --version)"
  '';
}
