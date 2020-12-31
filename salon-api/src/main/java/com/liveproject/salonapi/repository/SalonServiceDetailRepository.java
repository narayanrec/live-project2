package com.liveproject.salonapi.repository;

import com.liveproject.salonapi.domain.SalonServiceDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalonServiceDetailRepository extends CrudRepository<SalonServiceDetail, Long> {
}
