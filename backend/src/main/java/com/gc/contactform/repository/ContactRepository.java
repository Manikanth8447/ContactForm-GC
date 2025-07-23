package com.gc.contactform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.gc.contactform.model.Contact;

public interface ContactRepository extends MongoRepository<Contact, String> {

}
