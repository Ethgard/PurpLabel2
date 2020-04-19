package application;

import application.db.dals.VisitInfo;

import org.springframework.data.repository.CrudRepository;

public interface VisitInfoRepository extends CrudRepository<VisitInfo, Integer> {

}
