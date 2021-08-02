package agency.repair.validators;

public interface Validator<TModel> {
    boolean isValid(TModel model);
}
