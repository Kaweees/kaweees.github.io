# Like GNU `make`, but `just` rustier.
# https://just.systems/
# run `just` from this directory to see available commands

alias i := install
alias u := update
alias p := pre_commit
alias c := clean
alias f := format

# Default command when 'just' is run without arguments
default:
  @just --list

# Install the virtual environment and pre-commit hooks
install:
  @echo "Installing..."
  @pnpm install

update:
  @echo "Updating..."
  @pnpm taze
  @pre-commit autoupdate

# Run pre-commit
pre_commit:
  @echo "Running pre-commit..."
  @pre-commit run -a

# Remove build artifacts and non-essential files
clean:
  @echo "Cleaning..."
  @find . -type d -name "node_modules" -exec rm -rf {} +

# Format the project
format:
  @echo "Formatting..."
  @pnpm format
  @find . -name "*.nix" -type f -exec nixfmt {} \;
