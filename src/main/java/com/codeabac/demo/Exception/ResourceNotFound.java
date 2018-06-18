package com.codeabac.demo.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFound extends RuntimeException {
  private String resourceName;
  private Object fieldValue;
  private String fieldName;

    public ResourceNotFound(String resourceName, Object fieldValue, String fieldName) {
        super(String.format("%s not found with %s : '%s'", resourceName, fieldName , fieldValue));
        this.resourceName = resourceName;
        this.fieldValue = fieldValue;
        this.fieldName = fieldName;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public Object getFieldValue() {
        return fieldValue;
    }

    public void setFieldValue(Object fieldValue) {
        this.fieldValue = fieldValue;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }
}
