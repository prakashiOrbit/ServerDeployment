package com.dml.application.Retrofit;

import com.dml.application.Models.Catlist;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface ServiceApi {

    @FormUrlEncoded

  //@Header("Session-Id: 900ee7d5-ce13-4d69-adc3-a866beee5d8e")
    @POST("Sixareapi/cartquantityupdate")
    Call<Catlist> getcategory(@Field("customer_id") String customer_id,
                             @Field("item_id") String item_id,
                             @Field("item_status") String item_status);


}
