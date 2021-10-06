export interface UseCaseBase<Request = {},Response = {}>
{
    execute(req : Request) : Promise<Response>;
}