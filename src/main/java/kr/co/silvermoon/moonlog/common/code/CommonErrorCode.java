package kr.co.silvermoon.moonlog.common.code;

public enum CommonErrorCode implements ErrorCode{
    FORBIDDEN(403, "접근을 거부함"),
    UNAUTHORIZED(401, "인증되지않음");

    private int code;
    private String message;
    CommonErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    @Override
    public int getCode(){
        return this.code;
    }

    @Override
    public String getMessage(){
        return this.message;
    }
}
