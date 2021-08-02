package agency.repair.config;

public enum ProjectURL {
    FRONTEND_ROOT("http://localhost:3000");

    final String path;

    ProjectURL(final String path) {
        this.path = path;
    }

    @Override
    public String toString() {
        return path;
    }
}
