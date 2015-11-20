package com.ryanjbaxter.spring.cloud.ocr.races;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by yutao on 11/19/15.
 */
@FeignClient("participants")
interface ParticipantsClient {

    @RequestMapping(method = RequestMethod.GET, value="/races/{raceId}")
    List<Participant> getParticipants(@PathVariable("raceId") String raceId);

}
