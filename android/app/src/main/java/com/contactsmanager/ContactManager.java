package com.contactsmanager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

import android.content.ContentResolver;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

public class ContactManager extends ReactContextBaseJavaModule {

//    private static final String DURATION_SHORT_KEY = "SHORT";
//    private static final String DURATION_LONG_KEY = "LONG";

    public ContactManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "ContactAndroid";
    }
     @ReactMethod
     public void getAll(Callback callback) {
         ContentResolver cr = getReactApplicationContext().getContentResolver();

         ContactsProvider contactsProvider = new ContactsProvider(cr);
         WritableArray contacts = contactsProvider.getContacts();

         callback.invoke(null, contacts);
     }
//    @Override
//     public Map<String, Object> getConstants() {
//        final Map<String, Object> constants = new HashMap<>();
//        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
//        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
//        return constants;
//    }
    @ReactMethod
    public void show(String message, int duration) {
//        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}


