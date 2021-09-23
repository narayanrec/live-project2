package com.liveproject.salonapi.repository;

import com.liveproject.salonapi.domain.Slot;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.NamedNativeQuery;
import java.time.LocalDate;

@Repository
public interface SlotRepository extends CrudRepository<Slot, Long> {

    /*@Query("select sl from Slot sl " +
            " where CAST(sl.slotFor AS date) = CAST(:#{#requestDate} AS date) " +
            "and sl.status = 0 " +
            "and sl.selectedService.id = :#{#salonServiceId}" +
            " order by slotFor")*/
    @Query(value = "select sl.* from slot sl " +
            "join slot_available_services sas on sl.id = sas.slot_id " +
            "join salon_service_detail ssd on ssd.id = sas.available_services_id " +
            "where CAST(sl.slot_for AS date) = CAST(:#{#requestDate} AS date) and ssd.id = :#{#salonServiceId}", nativeQuery = true)
    Iterable<Slot> getAllSlots(long salonServiceId, LocalDate requestDate);
}
