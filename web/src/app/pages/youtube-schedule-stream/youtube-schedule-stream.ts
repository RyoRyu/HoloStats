import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Observable, Subject } from "rxjs";
import { map, scan, startWith, switchMap, tap } from "rxjs/operators";

import {
  StreamList,
  StreamListLoadMoreOption,
  StreamListOrderBy,
  StreamStatus,
  StreamGroup,
} from "src/app/models";
import { ApiService, ConfigService } from "src/app/shared";
import { translate } from "src/i18n";

@Component({
  selector: "hs-youtube-schedule-stream",
  templateUrl: "youtube-schedule-stream.html",
  styleUrls: ["youtube-schedule-stream.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class YoutubeScheduleStream implements OnInit, OnDestroy {
  constructor(
    private api: ApiService,
    private title: Title,
    private config: ConfigService
  ) {}

  loadMore$ = new Subject<StreamListLoadMoreOption>();

  data$: Observable<StreamList> = this.loadMore$.pipe(
    startWith<StreamListLoadMoreOption>({ refresh: true }),
    switchMap(({ refresh, last }) =>
      this.api
        .youtubeStreams({
          ids: [...this.config.vtuber],
          status: [StreamStatus.scheduled],
          orderBy: StreamListOrderBy.scheduleTimeAsc,
          startAt: last?.scheduleTime,
        })
        .pipe(
          map((res) => ({
            streams: res.streams,
            updatedAt: res.updatedAt,
            loading: false,
            reachedEnd: res.streams.length < 24,
            refresh,
          })),
          startWith({ loading: true, refresh })
        )
    ),
    scan<StreamList, StreamList>((acc, cur) => ({
      ...acc,
      ...cur,
      streams: cur.loading
        ? acc.streams
        : cur.refresh
        ? cur.streams
        : [...acc.streams, ...cur.streams],
    })),
    tap(console.log)
  );

  ngOnInit() {
    this.title.setTitle(`${translate("youtubeSchedule")} | TaiwanVuber`);
  }

  ngOnDestroy() {
    this.loadMore$.complete();
  }

  trackBy(_: number, group: StreamGroup): number {
    return group.date;
  }
}
